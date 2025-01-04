from ...database.models import MediaitemTypes, V3Mediaitem
from ..config.groups.actions import MulticameraConfigurationSet, MulticameraProcessing
from ..config.models.models import SinglePictureDefinition
from ..mediaprocessing.processes import process_and_generate_wigglegram
from .base import JobModelBase


class JobModelMulticamera(JobModelBase):
    def __init__(self, configuration_set: MulticameraConfigurationSet):
        super().__init__(configuration_set)
        self._media_type: MediaitemTypes = MediaitemTypes.multicamera

        self._total_captures_to_take = 1

        # self._validate_job()

    def get_phase1_singlepicturedefinition_per_index(self, index: int = None) -> SinglePictureDefinition:
        processing: MulticameraProcessing = self._configuration_set.processing

        # until now just a very basic filter avail applied over all images

        return SinglePictureDefinition(
            filter=processing.filter.value,
        )

    def do_phase2_process_and_generate(self, phase1_mediaitems: list[V3Mediaitem], phase2_mediaitem: V3Mediaitem):
        process_and_generate_wigglegram(phase1_mediaitems, phase2_mediaitem)
