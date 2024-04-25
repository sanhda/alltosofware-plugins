import {humanFileSize} from './util/util.js'

let appIcon = ''
let fileName = ''
let fileSize = ''

function imagesUploadEvent() {
    // link custom button event
    $('#custom-images-upload').click(() => {
        $('#images-upload').click();
    })

    // icon changed
    $('#images-upload').change(function() {
        var files = this.files;
        if (!files.length) {return}

        const imageList = document.getElementById('thumbnail-slider'); // Get the <ul> element
    
        // Clear previous images from the list
        imageList.innerHTML = '';

        // add images to image viewer
        let viewerHtml = ''
        for (let i=0; i<files.length; i++) {
            const file = files[i];
            // Check if the file is an image
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                
                // Define a function to handle the file reading operation
                reader.onload = function(e) {
                    // Create an image element
                    const img = document.createElement('img');
                    img.src = e.target.result; // Set the source of the image to the data URL
                    
                    // Create a list item with the specified structure
                    const listItem = document.createElement('li');
                    listItem.className = 'thumbnail-item';
    
                    const thumbnailItemContainer = document.createElement('div');
                    thumbnailItemContainer.className = 'thumbnail-item-container';
    
                    const thumbnailImageContainer = document.createElement('div');
                    thumbnailImageContainer.className = 'thumbnail-image-container';
    
                    const anchor = document.createElement('a');
                    anchor.href = ''; // You can set the href attribute if needed
    
                    // Append the image to the anchor element
                    anchor.appendChild(img);
    
                    // Append the anchor element to the thumbnail image container
                    thumbnailImageContainer.appendChild(anchor);
    
                    const removeButtonContainer = document.createElement('div');
    
                    const removeButton = document.createElement('button');
                    removeButton.className = 'flat-button';
                    removeButton.textContent = 'Remove';
    
                    // Add event listener to remove button
                    removeButton.addEventListener('click', function() {
                        listItem.remove(); // Remove the list item when the button is clicked
                    });
    
                    // Append the remove button to the remove button container
                    removeButtonContainer.appendChild(removeButton);
    
                    // Append thumbnail image container and remove button container to the thumbnail item container
                    thumbnailItemContainer.appendChild(thumbnailImageContainer);
                    thumbnailItemContainer.appendChild(removeButtonContainer);
    
                    // Append the thumbnail item container to the list item
                    listItem.appendChild(thumbnailItemContainer);
    
                    // Append the list item to the image list
                    imageList.appendChild(listItem);
                };
                
                // Read the file as a data URL
                reader.readAsDataURL(file);
            }
        }
    });
}

function appIconUploadEvent() {
    // link custom button event
    $('#custom-app-icon-upload').click(() => {
        $('#app-icon-upload').click();
    })

    // icon changed
    $('#app-icon-upload').change(function() {
        var files = this.files;
        if (!files.length) {return}

        appIcon = files[0].name
        $('#app-icon-name')[0].textContent = appIcon
        
        // set avartar for app icon
        const url = URL.createObjectURL(files[0]);
        $("#app-icon-thumbnail").css("background-image", "url(" + url + ")");

    });

    //remove
    $('#app-icon-remove').click(() => {
        appIcon = '';
        $('#app-icon-name')[0].textContent = $('#app-icon-name')[0].dataset.defaultVal;
    })
}

function fileUploadEvent() {
    // link custom button event
    $('#custom-file-upload').click(() => {
        $('#file-upload').click();
    })

    // file changed
    $('#file-upload').change(function() {
        var files = this.files;
        if (!files.length) {return}

        fileName = files[0].name
        fileSize = files[0].size

        $('#file-name')[0].textContent = fileName;
        $('#file-size')[0].textContent = humanFileSize(fileSize);
        $('#custom-file-upload').hide();
        $('#file-remove').show();
    })

    //remove
    $('#file-remove').click(() => {
        fileName = '';
        $('#file-name')[0].textContent = $('#file-name')[0].dataset.defaultVal;
        $('#file-size')[0].textContent = '';
        $('#custom-file-upload').show();
        $('#file-remove').hide();
        $('#file-upload').val('')
    })
}

$(document).ready(function() {

    imagesUploadEvent();
    appIconUploadEvent();
    fileUploadEvent();

});