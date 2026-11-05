const track = document.querySelector(".story-track");
const chapters = [...document.querySelectorAll(".story-chapter")];
const bricks = [...document.querySelectorAll("a.brick")];
const arrows = [...document.querySelectorAll(".story-arrow")];
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let activeIndex = 0;
let lastWheelStep = 0;

const showActiveChapter = () => {
  bricks.forEach((brick, index) => {
    brick.classList.toggle("is-placed", index <= activeIndex);

    if (index === activeIndex) {
      brick.setAttribute("aria-current", "step");
    } else {
      brick.removeAttribute("aria-current");
    }
  });

  chapters.forEach((chapter, index) => chapter.classList.toggle("is-active", index === activeIndex));

  arrows.forEach((arrow) => {
    const target = activeIndex + Number(arrow.dataset.step);
    arrow.disabled = target < 0 || target >= chapters.length;
  });
};

const goToChapter = (index, animate = true) => {
  const target = Math.max(0, Math.min(index, chapters.length - 1));

  track.scrollTo({
    left: chapters[target].offsetLeft,
    behavior: animate && !reducedMotion ? "smooth" : "auto",
  });
  history.replaceState(null, "", `#${chapters[target].id}`);
};

track.addEventListener(
  "scroll",
  () => {
    const index = Math.round(track.scrollLeft / track.clientWidth);

    if (index !== activeIndex) {
      activeIndex = index;
      showActiveChapter();
    }
  },
  { passive: true },
);

track.addEventListener(
  "wheel",
  (event) => {
    const isSideways = Math.abs(event.deltaX) > Math.abs(event.deltaY);
    const step = Math.sign(isSideways ? event.deltaX : event.deltaY);
    const chapter = chapters[activeIndex];
    const canScrollInside =
      step > 0 ? chapter.scrollTop + chapter.clientHeight < chapter.scrollHeight - 1 : chapter.scrollTop > 0;

    if (!step || (!isSideways && canScrollInside)) {
      return;
    }

    event.preventDefault();

    if (event.timeStamp - lastWheelStep > 650) {
      lastWheelStep = event.timeStamp;
      goToChapter(activeIndex + step);
    }
  },
  { passive: false },
);

bricks.forEach((brick, index) => {
  brick.addEventListener("click", (event) => {
    event.preventDefault();
    goToChapter(index);
  });
});

arrows.forEach((arrow) => {
  arrow.addEventListener("click", () => goToChapter(activeIndex + Number(arrow.dataset.step)));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    goToChapter(activeIndex + 1);
  } else if (event.key === "ArrowLeft") {
    goToChapter(activeIndex - 1);
  }
});

window.addEventListener("resize", () => {
  track.scrollLeft = chapters[activeIndex].offsetLeft;
});

document.body.classList.add("story-ready");
activeIndex = Math.max(0, chapters.findIndex((chapter) => `#${chapter.id}` === location.hash));
track.scrollLeft = chapters[activeIndex].offsetLeft;
showActiveChapter();
