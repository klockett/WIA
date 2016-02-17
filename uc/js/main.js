/**
 * Created by kenlockett1 on 2/11/16.
 */

    $(document).ready(function() {

        function nextLinkClicked(){

            var currentActiveImage = $(".image-shown");
            var nextActiveImage = currentActiveImage.next();

            if (nextActiveImage.length == 0)
            {
                nextActiveImage = $(".carousel-inner img ").first();
            }

            currentActiveImage.removeClass("image-shown").addClass("image-hidden").css("z-index", -10);
            nextActiveImage.addClass("image-shown").removeClass("image-hidden").css("z-index", 20);
            $(".carousel-inner image").not([currentActiveImage, nextActiveImage]).css("z-index, 1");
        }

        $(".nextLink").on("click", function (e) {

            nextLinkClicked();

            e.preventDefault();


            //console.log("jquery works");
        });
        $(".previousLink").on("click", function (e) {

            var currentActiveImage = $(".image-shown");
            var nextActiveImage = currentActiveImage.prev();

            if(nextActiveImage.length == 0)
            {
                nextActiveImage = $(".carousel-inner img").last();
            }

            currentActiveImage.removeClass("image-shown").addClass("image-hidden").css("z-index", -10);
            nextActiveImage.addClass("image-shown").removeClass("image-hidden").css("z-index", 20);
            $(".carousel-inner image").not([currentActiveImage, nextActiveImage]).css("z-index, 1");

            e.preventDefault();

        });
        setInterval(nextLinkClicked, 2000);

    });

