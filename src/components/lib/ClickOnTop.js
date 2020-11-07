export const ClickOnTop = () => {
    window.scrollTo({top: 0, left: 0});
}

export const ClickOnTopSmooth = () => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
}