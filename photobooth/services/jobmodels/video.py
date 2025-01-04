from ...database.models import MediaitemTypes, V3Mediaitem
from ..config.groups.actions import VideoConfigurationSet
from ..config.models.models import SinglePictureDefinition
from .base import JobModelBase


class JobModelVideo(JobModelBase):
    def __init__(self, configuration_set: VideoConfigurationSet):
        super().__init__(configuration_set)
        self._media_type: MediaitemTypes = MediaitemTypes.video

        self._total_captures_to_take = 1

        # self._validate_job()

    def get_phase1_singlepicturedefinition_per_index(self, index: int = None) -> SinglePictureDefinition:
        raise RuntimeError("no filter available for videos")

    def do_phase2_process_and_generate(self, phase1_mediaitems: list[V3Mediaitem], phase2_mediaitem: V3Mediaitem):
        raise RuntimeError("no filter available for videos")
