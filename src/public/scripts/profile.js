function uploadIconEvent() {
    const files = $('#icon')[0].files
    if (!files.length) { return };

    var reader = new FileReader();
    reader.readAsDataURL(files[0]); // Convert file to base64 string

    reader.onload = function () {
        let url = reader.result
        $("#profile-icon").css("background-image", "url(" + url + ")");
    };
}

function removeIconEvent() {
    $('#icon').val('')

    const iconPath = $('#icon')[0].dataset.defaultPath;
    $("#profile-icon").css("background-image", "url(" + iconPath + ")");
}

async function updateEvent() {
    const userId = $('#userId').val();

    // contact
    const userName = $('#userName').val();
    const phone = $('#phone').val();
    const website = $('#website').val();
    const support = $('#support').val();
    const contact = {phone, website, support}

    // social
    const youtube = $('#youtube').val();
    const linkedin = $('#linkedin').val();
    const telegram = $('#telegram').val();
    const social = {youtube, linkedin, telegram}

    // icon
    let imageUrl = $('#profile-icon').css("background-image");
    let data = { userId, userName, contact, social, icon: imageUrl };

    // If validation passes, call post profile
    try {
        const res = await fetch('/profile', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json',
            'Accept': 'application/json' }
        })

        const res_data = await res.json();

        if (!res_data.errors) {
            window.location.replace('/')
        }

    } catch (err) {
        console.log(err)
    }
}

$(document).ready(function() {

    // add icon
    $('#icon').change(uploadIconEvent)

    // remove icon
    $('#remove').click(removeIconEvent)

    // update button
    $('#update-profile').click(updateEvent)
})
