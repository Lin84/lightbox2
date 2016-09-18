// export default function lightbox(container) {
    //     var modal = document.getElementById('myModal');
    //     var modalImg = document.getElementById('modalImg');
    //     var imgsCount = document.images.length-2;
    //     console.log(imgsCount);
    //     console.log (document.images[imgsCount].src);
    //     container.querySelector('.lightbox-item img').addEventListener('click', function(e) {
    //         modal.style.display = 'inline-block';
    //         modalImg.src = this.src.replace(/min/i, '');
    //     });
    //     var span = document.getElementsByClassName('close')[0];
    //     span.onclick = function() {
    //         modal.style.display = 'none';
    //     };
// }

export default function lightbox(container) {
    var modal = document.getElementById('myModal');
    // var modalImg = document.getElementById('modalImg');
        // var imgsCount = document.images.length-2;
        // // console.log(imgsCount);
        // // console.log (document.images[imgsCount].src);

        // container.querySelectorAll('lightbox-item').addEventListener('click', function(e, i) {
        //     console.log('hello');
        //     modal.style.display = 'inline-block';
        //     modalImg.src = this.querySelector('img').src.replace(/min/i, '');
        // });
        // var span = document.getElementsByClassName('close')[0];
        // span.onclick = function() {
        //     modal.style.display = 'none';
    // };

    var currentImg;
    var nextImg = document.getElementById('nextImg');
    var prevImg = document.getElementById('prevImg');
    var lightboxItem = container.querySelectorAll('.lightbox-item');
    var lightboxImg = container.querySelectorAll('img');

    function indexInParent(index) {
        var children = index.parentNode.childNodes;
        var num = 0;
        for (var i=0; i<children.length; i++) {
            if (children[i]==index) return num;
            if (children[i].nodeType==1) num++;
        }
        // return -1;
        console.log(children[i].nodeType);
    }

    lightboxItem.forEach(function(ele, idx, arr) {
        ele.addEventListener('click', function() {
            currentImg = idx;
            modalImg.src=ele.querySelector('img').src.replace(/min/i, '');
            modal.style.display= 'inline-block';
        });
    });

    nextImg.onclick = function() {
        if ( currentImg >= lightboxItem.length-1) {
            currentImg = 0;
        } else {
            currentImg = currentImg + 1;
        }
        modalImg.src=lightboxImg[currentImg].src.replace(/min/i, '');
    };

    prevImg.onclick = function() {
        if ( currentImg <= 0 ) {
            currentImg = lightboxItem.length-1;
        } else {
            currentImg = currentImg - 1;
        }
        modalImg.src=lightboxImg[currentImg].src.replace(/min/i, '');
    };

    var close = document.getElementsByClassName('close')[0];
    close.onclick = function() {
        modal.style.display = 'none';
    };
}
