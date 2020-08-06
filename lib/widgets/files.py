from random import choice
from string import ascii_lowercase

from django.forms import FileInput
from django.utils.safestring import mark_safe


class ImagePreviewWidget(FileInput):
    template_name = "book/file_widget.html"
    base_id = "admin-image-preview-widget"

    def render(self, name, value, attrs=None, renderer=None):
        random_lowercase_letters = [choice(ascii_lowercase) for _ in range(10)]
        attrs["id"] = f"{self.base_id}-{''.join(random_lowercase_letters)}"
        widget = super(ImagePreviewWidget, self).render(name, value, attrs, renderer)
        return mark_safe(widget)
