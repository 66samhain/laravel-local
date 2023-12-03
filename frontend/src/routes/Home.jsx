import '../App.css';
import React, {useEffect, useRef, useState} from "react";
import axios from "axios";

export default function Home({ page }) {
    let [isEditing, setIsEditing] = useState(false);
    let [content, setContent] = useState(page.content);
    let [image, setImage] = useState(null);
    let [imageUrl, setImageUrl] = useState(null);

    const editRef = useRef();

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

        console.log(formData);

        // TODO replace hardcoded URL
        axios.post(`http://localhost:8000/api/pages/${page.id}`, formData)
            .then((response) => {
                page = response.data.data;
                // TODO update pages in parent component after changing something
            });
    }

    function handleFileChange(e) {
        console.log(e.target.files[0]);

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
                                { !isEditing ?
                                    <button className="btn btn-primary text-uppercase"
                                            onClick={ () => setIsEditing(true) }>Toggle edit mode</button>
                                    :
                                    null
                                }
                                <div className="content-container">
                                    { isEditing ?
                                        <>
                                            <div className="edit-container">
                                                <textarea id="w3review" name="w3review"
                                                          rows="10" cols="30"
                                                          defaultValue={ content } onChange={updateContent}></textarea>

                                                { page.image || imageUrl ?
                                                    <img src={ imageUrl ? imageUrl : page.image } alt="image" />
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
                                            <p>{ page.content }</p>

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
