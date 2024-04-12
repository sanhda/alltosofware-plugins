export function renderProductDetail(product) {
    let html = `<div class="detail-left-section">
        <div class="detail-head">
            <img class="detail-logo" src="./data/products/allto-plugin/images/AllToLogo.png" alt="">
            <div class="detail-head-title">
                <h3>Smart Annotation (MEP)</h3>
                <div class="detail-rating">
                    <img class="detail-rating-icon" src="./img/ratings/rating-50.png" alt="">
                    <p class="header-rating-number">1 review</p>
                </div>
            </div>
        </div>

        <div class="description-container">
            <hr>
            <h3>Description</h3>
            <p>Smart Annotation is an AI-powered Autodesk® Revit® add-in to automate annotating and documentation process of the drawings. The AI algorithm behind the app places tags in their preferred positions and aligns them with other tags without overlapping with other elements in the document. 

                <br><br>Due to the nature of documentation and the variety of options to document drawings, the Smart Annotation app is highly customizable and provides a user-friendly interface for the users to arrange and annotate drawings to their standards.
                
                <br><br>Now you can use Smart annotation to tag Fabrication parts in Revit. 
                
                <br><br>Also, you can use the Smart annotation app to read all the part parameters and link them live to your shared parameters. 
                
                <br><br>*** Currently we only support MEP documentation. We are working on the architectural package and will release it soon ****</p>
        </div>

        <div class="version-detail">
            <hr>
            <h3>About this version</h3>
            <p>Version 1.20.4, 3/21/2024
                <br><br>- Nested family tagging is now supported 
                <br>- Assembly tagging is not supported 
                <br>- Reported issues are fixed</p>
        </div>

        <div class="image-video-container">
            <hr>
            <h3>Screenshots and Videos</h3>
        </div>
    </div>
    <div class="detail-right-section">
        <h2>Trial</h2>
        <button class="download-button">Download</button>
        <button class="add-to-cast-button">Add to Wishlist</button>

        <div class="info-container">
            <div class="info-detail">
                <p class="info-left">Download Size:</p>
                <p class="info-right">15.3 MB</p>
            </div>
            
            <div class="info-detail">
                <p class="info-left">Release Date:</p>
                <p class="info-right">4/18/2021</p>
            </div>

            <div class="info-detail">
                <p class="info-left">Last Updated:</p>
                <p class="info-right">3/21/2024</p>
            </div>

            <div class="info-detail">
                <p class="info-left">Version Info:</p>
                <p class="info-right">1.20.4</p>
            </div>

            <div class="info-detail">
                <p class="info-left">Website:</p>
                <a class="info-right" href="">https://alltosoftware.com</a>
            </div>

            <div class="info-detail">
                <p class="info-left">Cust. Support:</p>
                <a class="info-right" href="">https://alltosoftware.com</a>
            </div>

            <div>
                <hr>
                <br>
                <h3>Compatible with:</h3>
                <p>Allplan
                    <br><b>Version:</b> 2024, 2023, 2022, 2021
                </p>
            </div>

            <div class="pulisher-info">
                <hr>
                <br><br>
                <a href="../../detail.html">
                    <div class="pulisher-header">
                        <img src="./data/products/allto-plugin/images/AllToLogo.png" alt="">
                        <div class="pulisher-title-container">
                            <h3>Allto Software</h3>
                            <p><b>25 Apps</b></p>
                        </div>
                    </div>
                </a>
            </div>

            <div>
                <h3>More apps from this pulisher</h3>
                <div style="height: 150px" class="product">
                    <a href="../../detail.html">
                        <div class="product-header">
                            <img src="./data/products/allto-admin/images/ALLTOAdmin.png" alt="">
                            <h3>Allto Software</h3>
                        </div>
                
                        <div class="product-rating">
                            <img class="rating-icon" src="./img/ratings/rating-50.png" alt="">
                            <p class="rating-number">1000</p>
                        </div>
                
                        <p class="product-price">Trial</p>
                    </a>
                    
                </div>
            </div>
            
        </div>
    </div>`

    document.querySelector('.detail-container').innerHTML = html;
}