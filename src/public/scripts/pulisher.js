$('#pulisherForm').submit(async function(event) {
    event.preventDefault(); // Prevent form submission

    const useFileLink = $("input[name='useFileLink']:checked").val() == "True";
    const file = $('#file-upload').val();
    const fileLink = $('#FileLink').val();

    const appIcon = $('#app-icon-upload')[0].files;
    const images = $('#images-upload')[0].files;

    if (!useFileLink) {
        console.log(file)
        if (!file) {
            $('#error-message').html('Please upload product file');
        return
        }
    } else {
        if (!fileLink) {
            $('#error-message').html('Please input file link');
        return
        }
    }

    if (!appIcon.length) {
        $('#error-message').html('Please upload an icon for the product');
        return
    }

    if (!images.length) {
        $('#error-message').html('Please upload at least 1 image for the product');
        return
    }

    $('#error-message').html('');
    this.submit();
    
});
