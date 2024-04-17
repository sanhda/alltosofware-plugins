import {humanFileSize} from './util/util.js'

let images = []
let appIcon = ''
let fileName = ''
let fileSize = ''

function imagesUploadEvent() {
    // link custom button event
    $('#custom-images-upload').click(() => {
        $('#images-upload').click();
    })

    // add more images
    $('#images-upload').change(function() {
        var files = this.files;
        for (var i = 0; i < files.length; i++) {
            if (!images.includes(files[i].name)) {
                images.push(files[i].name);
            }
        }
    })
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
    })
}

$(document).ready(function() {

    imagesUploadEvent();
    appIconUploadEvent();
    fileUploadEvent();

});