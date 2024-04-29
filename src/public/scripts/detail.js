let currentPosition = 0;
const slidesToShow = 6; // Number of slides to show at once
const slideStep = 1; // Number of slides to move per click
const slideWidth = document.querySelector('.thumbnail-slider').clientWidth/slidesToShow // 10 is gap
const slider = document.querySelector('.thumbnail-slider');
const slidesCount = slider.children.length;
const maxSlideIndex = slidesCount - slidesToShow;
let slideIndex = 0;

function toggleButtons() {
    if (slideIndex===0 || slidesCount <= slidesToShow) {
        $("#prevBtn").hide();
    } else {$("#prevBtn").show();}
    
    if (slideIndex===maxSlideIndex || slidesCount <= slidesToShow) {
        $("#nextBtn").hide();
    } else {$("#nextBtn").show();}
}

function slide(direction) {
    slideIndex += direction * slideStep;
    slideIndex = Math.min(maxSlideIndex, Math.max(0, slideIndex));

    toggleButtons()

    currentPosition = -slideIndex * (slideWidth);

    slider.style.transform = `translateX(${currentPosition}px)`;
}

function imageSelected(event) {
    const src = event.target.src;
    $('#image-viewer').show();
    $('#image-viewer').attr('src', src);
    $('#video-viewer').hide();
}

async function downloadProduct() {
    const productId = $('#productId').val();
    console.log(productId)

    // Make a request to fetch the file URL from the server
    await fetch('pulisher/download', {
            method: 'POST',
            body: JSON.stringify({ productId }),
            headers: { 'Content-Type': 'application/json',
            'Accept': 'application/json' }
        })
        .then(response => response.json())
        .then(async data => {
            if (data.errors) {
                console.log(data.errors);
                return
            }

            // get file or file link from server
            let fileUrl = '';
            if (data.fileUrl) {
                fileUrl = data.fileUrl;
                window.location.replace(fileUrl)
            } else if (data.file) {
                const path = data.file[0].path;
                window.location.replace(path)
            }
            
        })
        .catch(error => {
            console.error('Error fetching file URL:', error);
        });
}

function ratingStar(event) {
    const alt = event.target.dataset.count;

    document.querySelectorAll('.star-rating').forEach((target) => {
        if (target.dataset.count <= alt) {
            target.classList.remove('star-off')
            target.classList.add('star-on')
        } else {
            target.classList.remove('star-on')
            target.classList.add('star-off')
        }
    })

    $('#rating').val(alt)
}

function adjustTextareaHeight(query) {
    document.querySelectorAll(query).forEach((textarea) => {
        textarea.style.height = 'auto'; // Reset the height to auto
        textarea.style.height = textarea.scrollHeight + 'px'; // Set the height to fit the content
    })
}

toggleButtons()

// Previous button event listener
document.querySelector('#prevBtn').addEventListener('click', () => slide(-1));

// Next button event listener
document.querySelector('#nextBtn').addEventListener('click', () => slide(1));

// User select images
$('.thumbnail-image').click(() => imageSelected(this.event));

// download button event listener
$('#download-button').click(downloadProduct)

// review star event listener
$('.star-rating').click(() => ratingStar(this.event))

// textarea automatic contain
$(document).ready(() => {
    adjustTextareaHeight('.review-comment')
    adjustTextareaHeight('#description')
})

// submit review
$('#reviewForm').submit(async function(event) {
    event.preventDefault(); // Prevent form submission
    const userId = $('#userId').val();
    const userName = $('#userName').val();
    const productId = $('#productId').val();
    const comment = $('#comment').val();
    const rating = $('#rating').val();

    if (!comment) {
        $('#error-message').html('Please add an comment for the preview');
        return
    }

    if (!rating) {
        $('#error-message').html('Please rate the product');
        return
    }

    // If validation passes, submit the form
    try {
        const res = await fetch('/detail/review', {
            method: 'POST',
            body: JSON.stringify({ userId, userName, productId, comment, rating }),
            headers: { 'Content-Type': 'application/json',
            'Accept': 'application/json' }
        })

        const data = await res.json();

        if (data.errors) {
            $('#error-message').html(data.errors);
            return
        }

        if (data.review) {
            // clear error and comment
            $('#error-message').html('');
            $('#comment').val('');
            window.location.href = `/detail?id=${productId}`;
        }

    } catch (err) {
        console.log(err)
    }
});
