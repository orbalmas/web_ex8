angular.module('photoGalleryApp', [])
.controller('GalleryController', function() {
    this.photos = Array.from({length: 18}, (_, index) => ({src: `https://picsum.photos/200/300?random=${index + 1}`, big: false}));

    this.selectedPhoto = null;

    this.selectPhoto = function(photo) {
        this.selectedPhoto = photo;
    };
});