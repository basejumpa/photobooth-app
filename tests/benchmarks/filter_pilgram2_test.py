import logging

import pilgram2
import pytest
from PIL import Image

logger = logging.getLogger(name=None)


@pytest.fixture(params=pilgram2.__all__)
def filter_algo(request):
    yield request.param


def test_pilgram_lores_benchmark(benchmark, filter_algo):
    with Image.open("tests/assets/input_lores.jpg") as im:
        if filter_algo == "__version__":
            pytest.skip()
        benchmark(eval(f"pilgram2.{filter_algo}"), im)


def test_pilgram_hires_benchmark(benchmark, filter_algo):
    with Image.open("tests/assets/input.jpg") as im:
        if filter_algo == "__version__":
            pytest.skip()
        benchmark(eval(f"pilgram2.{filter_algo}"), im)
