
import $ from "./lib/import-jquery";

$("#target1").on("targetFound", () => {
  $("#video").append(
    `<video width="100%" autoplay muted loop webkit-playsinline playsinline >
            <source src="https://cdn.aframe.io/videos/bunny.mp4" type="video/mp4" />
          </video>`
  );
  $("#videoShow").css("display", "block");
});

$("#target1").on("targetLost", () => {
  $("#videoShow").css("display", "none");
  $("#video").empty();
});

$("#target2").on("targetFound", () => {
  $("#video").append(
    `<video width="100%" autoplay muted loop webkit-playsinline playsinline>
            <source src="https://cdn.aframe.io/videos/fireworks.mp4" type="video/mp4" />
          </video>`
  );
  $("#videoShow").css("display", "block");
});

$("#target2").on("targetLost", () => {
  $("#videoShow").css("display", "none");
  $("#video").empty();
});

$("#target3").on("targetFound", () => {
  $("#video").append(
    `<video width="100%" autoplay muted loop webkit-playsinline playsinline>
            <source src="videos/test3.mp4" type="video/mp4" />
          </video>`
  );
  $("#videoShow").css("display", "block");
});

$("#target3").on("targetLost", () => {
  $("#videoShow").css("display", "none");
  $("#video").empty();
});


$("#target4").on("targetFound", () => {
  $("#video").append(
    `<video width="100%" autoplay muted loop webkit-playsinline playsinline>
            <source src="videos/test4.mp4" type="video/mp4" />
          </video>`
  );
  $("#videoShow").css("display", "block");
});

$("#target4").on("targetLost", () => {
  $("#videoShow").css("display", "none");
  $("#video").empty();
});

$("#target5").on("targetFound", () => {
  $("#video").append(
    `<video width="100%" autoplay muted loop webkit-playsinline playsinline>
            <source src="videos/test5.mp4" type="video/mp4" />
          </video>`
  );
  $("#videoShow").css("display", "block");
});

$("#target5").on("targetLost", () => {
  $("#videoShow").css("display", "none");
  $("#video").empty();
});


$("#target6").on("targetFound", () => {
  $("#video").append(
    `<video width="100%" autoplay muted loop webkit-playsinline playsinline>
            <source src="videos/test6.mp4" type="video/mp4" />
          </video>`
  );
  $("#videoShow").css("display", "block");
});

$("#target6").on("targetLost", () => {
  $("#videoShow").css("display", "none");
  $("#video").empty();
});

$("#target7").on("targetFound", () => {
  $("#video").append(
    `<video width="100%" autoplay muted loop webkit-playsinline playsinline>
            <source src="videos/test7.mp4" type="video/mp4" />
          </video>`
  );
  $("#videoShow").css("display", "block");
});

$("#target7").on("targetLost", () => {
  $("#videoShow").css("display", "none");
  $("#video").empty();
});


$("#target8").on("targetFound", () => {
  $("#video").append(
    `<video width="100%" autoplay muted loop webkit-playsinline playsinline>
            <source src="videos/test8.mp4" type="video/mp4" />
          </video>`
  );
  $("#videoShow").css("display", "block");
});

$("#target8").on("targetLost", () => {
  $("#videoShow").css("display", "none");
  $("#video").empty();
});

$("#target9").on("targetFound", () => {
  $("#video").append(
    `<video width="100%" autoplay muted loop webkit-playsinline playsinline>
            <source src="videos/test9.mp4" type="video/mp4" />
          </video>`
  );
  $("#videoShow").css("display", "block");
});

$("#target9").on("targetLost", () => {
  $("#videoShow").css("display", "none");
  $("#video").empty();
});

$("#start-btn").on("click", () => {
  $("#start-modal").hide();
});

// ios 本身需要點擊一下才能有聲音
window.addEventListener("click", (event) => {
  const video = document.querySelector("video")
  if (!video) {
    return;
  }
  video.muted = false
});

$('#logoModal').css('display', 'none')

$('#openLogoModal').click(() => {
  $('#logoModal').css('display', 'block')
})

$('#closeLogoModal').click(() => {
  $('#logoModal').css('display', 'none')
})