const previewImage = function (event, id) {
    $(document).ready(() => {
        // Create img
        const image_preview = document.createElement("img")
        const parent_container = document.getElementById(id + "-div")
        parent_container.appendChild(image_preview)

        // Parametrize img
        image_preview.src = URL.createObjectURL(event.target.files[0]);
        image_preview.id = id + "-output"
        image_preview.onload = function () {
            URL.revokeObjectURL(image_preview.src)
        };

        // Create action button
        const action_button = document.createElement("input")
        action_button.type = "button"
        action_button.value = "Remove Image"
        parent_container.appendChild(action_button)

        action_button.addEventListener("click", (e) => {
            image_preview.remove();
            action_button.remove();
            const input = $("#{{ widget.attrs.id }}")
            input.replaceWith(input.val('').clone(true));
        })
    })

}
