import timeit
from statistics import median
from turbojpeg import TurboJPEG, TJFLAG_FASTUPSAMPLE, TJFLAG_FASTDCT
import pytest
import logging

turbojpeg = TurboJPEG()
import io
import cv2
from PIL import Image

logger = logging.getLogger(name=None)


def turbojpeg_encode(bgr_array):
    # encoding BGR array to output.jpg with default settings.
    # 85=default quality
    bytes = turbojpeg.encode(bgr_array, quality=85)

    return bytes


def pillow_encode(frame_from_camera):
    image = Image.fromarray(frame_from_camera.astype("uint8"), "RGB")
    byte_io = io.BytesIO()
    image.save(byte_io, format="JPEG", quality=85)
    bytes_full = byte_io.getbuffer()

    return bytes_full


def cv2_encode(frame_from_camera):
    encode_param = [int(cv2.IMWRITE_JPEG_QUALITY), 90]
    result, encimg = cv2.imencode(".jpg", frame_from_camera, encode_param)

    return encimg


def print_stats(fun, times):
    print(f"{fun}: {round(median(times)*1000,1)}ms per call")
    logger.warning(f"{fun}: {round(median(times)*1000,1)}ms per call")


@pytest.fixture(params=["turbojpeg_encode", "pillow_encode", "cv2_encode"])
def library(request):
    # yield fixture instead return to allow for cleanup:
    yield request.param

    # cleanup
    # os.remove(request.param)


@pytest.fixture(params=["tests/assets/input_lores.jpg", "tests/assets/input.jpg"])
def image(request):
    with open(request.param, "rb") as file:
        in_file_read = file.read()
        frame_from_camera = turbojpeg.decode(in_file_read)

    # yield fixture instead return to allow for cleanup:
    yield frame_from_camera

    # cleanup
    # os.remove(request.param)


def test_libraries_encode(library, image):
    print_stats(
        f"{library}",
        timeit.repeat(lambda: eval(library)(image), number=1, repeat=10),
    )
    assert True
