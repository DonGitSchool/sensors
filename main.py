# basic.forever(on_forever2)
def TestP0():
    if pins.digital_read_pin(DigitalPin.P0) == 0:
        basic.show_leds("""
            # . . . .
                        . # . . .
                        . . # . .
                        . . . # .
                        . . . . #
        """)
        pins.digital_write_pin(DigitalPin.P0, 1)

def on_button_pressed_ab():
    global Ghosts
    Ghosts = GBK
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def TestP1():
    if pins.digital_read_pin(DigitalPin.P1) == 0:
        basic.show_leds("""
            # . . . .
                        . # . . .
                        . . . . .
                        . # . . .
                        # . . . .
        """)
        pins.digital_write_pin(DigitalPin.P1, 1)
GBK: Image = None
Ghosts: Image = None
pac = images.create_big_image("""
    . # # # . . . . . .
        # # # # # . . . . .
        . . . # # . . . . .
        # # # # # . . . . .
        . # # # . . . . . .
""")
pacbac = images.create_big_image("""
    . # # # . . . . . .
        # # # # # . . . . .
        # # . . . . . . . .
        # # # # # . . . . .
        . # # # . . . . . .
""")
pellet = images.create_big_image("""
    . # # # . . . . . .
        # # # # # . . . . .
        # # # # # . . . . .
        # # # # # . . . . .
        . # # # . . . . . .
""")
Ghosts = images.create_big_image("""
    . # # # . . . . . .
        # . # . # . . . . .
        # # # # # . . . . .
        # # # # # . . . . .
        # . # . # . . . . .
""")
GBK = images.create_big_image("""
    . # # # . . . . . .
        # . # . # . . . . .
        # # # # # . . . . .
        # # # # # . . . . .
        # . # . # . . . . .
""")
Sus = images.create_big_image("""
    . # # . . . . . . .
        # . # # . . . . . .
        # # # # . . . . . .
        # # # # . . . . . .
        # . # . . . . . . .
""")

def on_forever():
    global Ghosts
    if pins.digital_read_pin(DigitalPin.P0) == 0:
        while pins.analog_read_pin(AnalogPin.P2) > 900:
            pellet.scroll_image(2, 200)
            pac.scroll_image(1, 200)
            break
        while pins.analog_read_pin(AnalogPin.P2) <= 900:
            Ghosts.scroll_image(1, 200)
            pac.scroll_image(1, 200)
            break
        pins.digital_write_pin(DigitalPin.P0, 1)
    if pins.digital_read_pin(DigitalPin.P1) == 0:
        Ghosts = Sus
        pins.digital_write_pin(DigitalPin.P1, 1)
basic.forever(on_forever)
