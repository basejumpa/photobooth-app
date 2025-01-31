import logging

from .services.aquisition import AquisitionService
from .services.base import BaseService
from .services.collection import MediacollectionService
from .services.filtetransfer import FileTransferService
from .services.gpio import GpioService
from .services.gpioout import GpiooutService
from .services.information import InformationService
from .services.logging import LoggingService
from .services.processing import ProcessingService
from .services.qrshare import QrShareService
from .services.share import ShareService
from .services.system import SystemService
from .services.wled import WledService

logger = logging.getLogger(__name__)


# and as globals module:
class Container:
    logging_service: LoggingService = LoggingService()
    wled_service: WledService = WledService()
    aquisition_service: AquisitionService = AquisitionService(wled_service)
    mediacollection_service: MediacollectionService = MediacollectionService()
    information_service: InformationService = InformationService(aquisition_service)
    gpioout_service: GpiooutService = GpiooutService()
    processing_service = ProcessingService(aquisition_service, mediacollection_service, wled_service, information_service, gpioout_service)
    system_service = SystemService()
    share_service = ShareService()
    gpio_service = GpioService(processing_service, share_service, mediacollection_service)
    qr_share_service = QrShareService(mediacollection_service)
    filetransfer_service = FileTransferService()

    def _service_list(self) -> list[BaseService]:
        # list used to start/stop services. List sorted in the order of definition.
        return [getattr(self, attr) for attr in __class__.__dict__ if isinstance(getattr(self, attr), BaseService)]

    def start(self):
        for service in self._service_list():
            try:
                service.start()

                logger.info(f"started {service.__class__.__name__}")
            except Exception as exc:
                logger.exception(exc)
                logger.critical("could not start service")

        logger.info("started container")

    def stop(self):
        for service in reversed(self._service_list()):
            try:
                service.stop()

                logger.info(f"stopped {service.__class__.__name__}")
            except Exception as exc:
                logger.exception(exc)
                logger.critical("could not stop service")


container = Container()
