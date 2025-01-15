function expand_pressed(button) {
    button.hidden = true;
    button.parentElement.querySelector(".collapse-button").hidden = false;
    button.parentElement.querySelector(".genre-branch").hidden = false;
}

function collapse_pressed(button) {
    button.hidden = true;
    button.parentElement.querySelector(".expand-button").hidden = false;
    button.parentElement.querySelector(".genre-branch").hidden = true;
}