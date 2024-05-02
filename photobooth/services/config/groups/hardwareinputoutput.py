"""
AppConfig class providing central config

"""

from pydantic import BaseModel, ConfigDict, Field


class GroupHardwareInputOutput(BaseModel):
    """
    Configure hardware GPIO, keyboard and more. Find integration information in the documentation.
    """

    model_config = ConfigDict(title="Hardware Input/Output Config")

    # keyboard config
    keyboard_input_enabled: bool = Field(
        default=False,
        description="Enable keyboard input globally. Keyup is catched in browsers connected to the app.",
    )

    # WledService Config
    wled_enabled: bool = Field(
        default=False,
        description="Enable WLED integration for user feedback during countdown and capture by LEDs.",
    )
    wled_serial_port: str = Field(
        default="",
        description="Serial port the WLED device is connected to.",
    )

    # GpioService Config
    gpio_enabled: bool = Field(
        default=False,
        description="Enable Raspberry Pi GPIOzero integration.",
    )
    gpio_pin_shutdown: int = Field(
        default=17,
        description="GPIO pin to shutdown after holding it for 2 seconds.",
    )
    gpio_pin_reboot: int = Field(
        default=18,
        description="GPIO pin to reboot after holding it for 2 seconds.",
    )

    # PrintingService Config
    printing_enabled: bool = Field(
        default=False,
        description="Enable printing in general.",
    )
