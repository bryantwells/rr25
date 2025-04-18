---
title: Mini TX
layout: default
---


# Mini TX (Basic)

This is the most basic FM transmitter, it is adapted from schematics made by [Tetsuo Kogawa](https://anarchy.translocal.jp/radio/micro/howtotx.html), [Art Swan](https://www.angelfire.com/art2/artswan/), [Harry Lythall (SM0VPO)](http://sm0vpo.altervista.org/) and [Practical Electronics, fig 3.94](http://instrumentacion.qi.fcen.uba.ar/libro/Scherz.pdf). This design uses an assembly technique called [Manhattan Style](https://www.qrpme.com/docs/K7QO%20Manhattan.pdf).

---

## Tools
- [ ] Soldering Iron
- [ ] Solder
- [ ] Tweezers
- [ ] 1/4in Bolt
- [ ] 2mm Flathead Screwdriver
- [ ] Superglue

---

## Components
- [ ] Copper PCB
- [ ] PCB Squares
- [ ] 16AWG Wire (~16in)
- [ ] 22AWG Wire (~5in)
- [ ] Resistors
    - [ ] 10k Ohm (1)
    - [ ] 1k Ohm (1)
- [ ] Capacitors
    - [ ] 0.1uF (1)
    - [ ] 0.01uF (1)
    - [ ] 4.7pF (1)
- [ ] Trimmer Capacitors
    - [ ] 0-30pF (1)
- [ ] Transistors
    - [ ] 2N2222 (1)
- [ ] Battery Clip
- [ ] Audio Cable

---

## Schematic
![](/media/mini-tx-1/schematic_mini-tx-1.png)

---

## Layout
![](/media/mini-tx-1/layout_mini-tx-1.png)

---

## Instructions

Prep the pcb by gluing the squares according to the given layout:

![](/media/mini-tx-1/IMG_0609.JPG)
![](/media/mini-tx-1/IMG_0610.JPG)

Add solder to the squares, like so:

![](/media/mini-tx-1/IMG_0612.JPG)
![](/media/mini-tx-1/IMG_0615.JPG)

People assemble PCBs in different ways. A popular method is to go from left to right given the schematic. I like to attach the most finicky parts first, so I'll start with the inductor. Prep the inductor by turning a piece of 22AWG wire around a 1/4in bolt 5 times. This is called an "air coil" and has [an inductance of rougly 0.1uH](https://www.66pacific.com/calculators/coil-inductance-calculator.aspx):

![](/media/mini-tx-1/IMG_0613.JPG)

Give it some feet and trim the leads: 

![](/media/mini-tx-1/IMG_0614.JPG)

Attach it like so (I also added the transitor and trimmer cap):

![](/media/mini-tx-1/IMG_0617.JPG)

Solder all of the parts to the boards, and try to keep the leads or short as possible. Once you've attached everything, add some 22AWG between the necessary pads for the power rail:

![](/media/mini-tx-1/IMG_0619.JPG)

Attach the battery clip, audio cable, and antenna. This antenna is 16", which is half of a [1/4 ground plane atenna tuned to 90MHz](https://www.66pacific.com/calculators/quarter-wave-vertical-antenna-calculator.aspx):

![](/media/mini-tx-1/IMG_0621.JPG)

Plug in your battery and audio source. Tune the transmitter using a 2mm screwdriver to the desired frequency. Ideally, you have a frequency counter or oscilloscope. If you dont, you can use an FM reciever find an empty space on the FM spectrum around 88–92MHz. Play a song you recognize, and turn the trimmer capacitor until you can hear it:

![](/media/mini-tx-1/IMG_0623.JPG)

---

## Reference

- [How to Build a Micro Transmitter](https://anarchy.translocal.jp/radio/micro/howtotx.html)
- [Art Swan's Electronic Circuits](https://www.angelfire.com/art2/artswan/)
- [Harry's Homebrew Homepage](http://sm0vpo.altervista.org/)
- [Manhattan Building Techniques](https://www.qrpme.com/docs/K7QO%20Manhattan.pdf)
- [Coil Inductance Calculator](https://www.66pacific.com/calculators/coil-inductance-calculator.aspx)
- [Quarter Wave Antenna Calculator](https://www.66pacific.com/calculators/quarter-wave-vertical-antenna-calculator.aspx)

---

## Additional Resources

- [PCB Fabrication Files](/fab.html)
- [Mini TX + Mic](/mini-tx-2.html)
- [Mini TX + Buffer](/mini-tx-3.html)
