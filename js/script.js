const privewImage = document.querySelector(".preview-img img");
const fileInput = document.querySelector(".file-input");
const chooseImg = document.querySelector(".choose-img");
const container = document.querySelector(".container");
const filterOption = document.querySelectorAll(".filter button");
const filterName = document.querySelector(".filter-info .name");
const filterSilde = document.querySelector(".slider input");
const filterValue = document.querySelector(".filter-info .value");
const optionSlide = document.querySelectorAll(".rotate .option button");
const resetFilterBtn = document.querySelector(".reset-filter");
const saveImageBtn = document.querySelector(".save-img");
let rotate = 0;
let flipHorizontal = 1;
let flipVertical = 1;
let brightness = 100, saturation = 100, inversion = 0, grayscale = 0;

const applyFilter = () => {
    privewImage.style.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
    privewImage.style.transform = `rotate(${rotate}deg) scale(${flipHorizontal}, ${flipVertical})`;
}


const loadMore = () => {
    let file = fileInput.files[0];
    console.log(file);
    privewImage.src = URL.createObjectURL(file); 
    container.classList.remove("disable");

    


}

filterOption.forEach(option => {
    option.addEventListener("click", function () {
        document.querySelector(".filter .active").classList.remove("active");
        option.classList.add("active");
        filterName.innerHTML = option.innerHTML;

        if (option.id === "brightness") {
            filterSilde.value = brightness;
            filterValue.innerHTML = `${brightness} %`
            filterSilde.max = "200";

        } else if (option.id === "saturation") {
            filterSilde.value = saturation;
            filterValue.innerHTML = `${saturation} %`
            filterSilde.max = "200";

        } else if (option.id === "inversion") {
            filterSilde.value = inversion;
            filterValue.innerHTML = `${inversion} %`
            filterSilde.max = "100";


        } else {
            filterSilde.value = grayscale;
            filterValue.innerHTML = `${grayscale} %`
            filterSilde.max = "100";


        }
    })
})

const updateRange = () => {
    filterValue.innerHTML = filterSilde.value + "%";

    const selectedFilter = document.querySelector(".filter .active");

    if (selectedFilter.id === "brightness") {
        brightness = filterSilde.value;
    } else if (selectedFilter.id === "saturation") {
        saturation = filterSilde.value
    } else if (selectedFilter.id === "inversion") {
        inversion = filterSilde.value

    } else {
        grayscale = filterSilde.value

    }


    applyFilter();
}

optionSlide.forEach(option => {
    option.addEventListener("click", function () {

        if (option.id === "left") {
            rotate -= 90;
        } else if (option.id === "right") {
            rotate += 90;
        } else if (option.id === "horizontal") {
            flipHorizontal = flipHorizontal === 1 ? -1 : 1;
        } else {
            flipVertical = flipVertical === 1 ? -1 : 1;
        }
        applyFilter()
    })
})


const resetFilter = () => {
    rotate = 0;
    flipHorizontal = 1;
    flipVertical = 1;
    brightness = 100;
    saturation = 100;
    inversion = 0;
    grayscale = 0;
    applyFilter()
    filterOption[0].click();
}


saveImageBtn.addEventListener("click",function(){
  alert("dfsdklfkl")
})
resetFilterBtn.addEventListener("click", resetFilter)
filterSilde.addEventListener("input", updateRange)
fileInput.addEventListener("change", loadMore)
chooseImg.addEventListener("click", () => fileInput.click());

