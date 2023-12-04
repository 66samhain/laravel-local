import '../App.css';
import { useEffect, useRef, useState } from "react";
import { useStore } from "../store/store";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Page({ page }) {
    let [isEditing, setIsEditing] = useState(false);
    let [content, setContent] = useState(page.content);
    let [image, setImage] = useState(null);
    let [imageUrl, setImageUrl] = useState(null);

    const pages = useStore((state) => state.pages);
    const user = useStore((state) => state.user);
    const updatePage = useStore((store) => store.updatePage);

    const editRef = useRef();

    const notifySuccess = () => toast.success('Updated successfully!');

    useEffect(() => {
        window.onclick = (event) => {
            if (event.target.contains(editRef.current)
                && event.target !== editRef.current) {
                setIsEditing(false);
            }
        }
    }, []);

    function updateContent(event) {
        setContent(event.target.value);
    }

    function update() {
        let formData = new FormData();

        formData.append('_method', 'put');

        if (image) {
            formData.append('image', image);
        }

        formData.append('content', content);

        updatePage(page.id, formData).then(() => {
            const index = pages.findIndex(storePage => storePage.id === page.id);
            page = pages[index];
            setIsEditing(false)
            setImage(null);
            setImageUrl(null);
            notifySuccess();
        });
    }

    function handleFileChange(e) {
        setImage(e.target.files[0]);
        setImageUrl(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <>
            <main className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7"
                             ref={editRef}>
                            <div className="page-container">
                                <ToastContainer position="top-center" />

                                { page.heading ?
                                    <h2 className="post-title" style={{ marginBottom: '30px' }}>{ page.heading }</h2>
                                    :
                                    null
                                }

                                { !isEditing && user.isAdmin ?
                                    <button className="btn btn-primary text-uppercase"
                                            onClick={ () => setIsEditing(true) }>Toggle edit mode</button>
                                    :
                                    null
                                }
                                <div className="content-container">
                                    { isEditing && user.isAdmin  ?
                                        <>
                                            <div className="edit-container">
                                                <textarea id="w3review" name="w3review"
                                                          rows="10" cols="30"
                                                          style={{ marginBottom: '30px' }}
                                                          defaultValue={ page.content } onChange={ updateContent }></textarea>

                                                { page.image || imageUrl ?
                                                    <img src={ imageUrl ? imageUrl : page.image } alt="image" style={{ marginBottom: '30px' }} />
                                                    :
                                                    null
                                                }

                                                <form encType="multipart/form-data">
                                                    <input
                                                        type="file"
                                                        onChange={ handleFileChange }
                                                    />
                                                </form>

                                                <button className="btn btn-primary text-uppercase"
                                                        id="submitButton"
                                                        type="submit"
                                                        style={{ marginTop: '20px' }} onClick={ () => { update() }}>Send</button>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <p style={{ alignSelf: 'flex-start' }}>{ page.content }</p>

                                            { page.image || imageUrl ?
                                                <img src={ imageUrl ? imageUrl : page.image } alt="image" />
                                                :
                                                null
                                            }
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
