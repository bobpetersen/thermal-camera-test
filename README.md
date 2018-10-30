# Low Cost Thermal Camera

This repository includes Python code that can be run on a Raspberry PI to dispaly images from a [SparkFun IR Array (MLX90640)](https://www.sparkfun.com/products/14844) on to a [PiTFT](https://www.adafruit.com/product/2315) screen.

## PARTS

*Note: We've currently only tested this on a Pi 3 B+. We plan to test this project on a Pi Zero W in the near future.*

- Raspberry Pi 3 B+ $40
- [SparkFun IR Array (MLX90640)](https://www.sparkfun.com/products/14844) $60
- 2.2" PiTFT $25
- [3D Printed Enclosure](https://www.thingiverse.com/thing:803447)


## Setup

### Raspberry PI

Our project uses the [mlx90640-library](https://github.com/pimoroni/mlx90640-library). Download the above library on your Raspberry PI and run it with the following commands:

```
make clean
make I2C_MODE=RPI
```

By default, the c++ examples in this library only output to `/dev/fb0` which is the HDMI frame buffer. To output to the PiTFT, you'll need to modify the `/examples/lib/fb.c`, switch to `/dev/fb1` and re-make the project.

Download the `/python/thermal-daemon.py` file from this project on to your Raspberry PI. Optionally, download the helper `.sh` files in the python folder. **IMPORTANT: Make sure to run the `thermal-daemon.py` with `sudo` or you will get a segmentation fault. 

### Web Server

Fork and clone this repository then start it with the following commands:

```
npm install
npm run server
npm run client
```

*NOTE: You'll need to update the `thermal-daemon.py` to point to your computers IP address or to the location you're hosting the web server.*

## Web Server Feature List

### Header COMPONENT
- [x] Set up <Header /> component

### Gallery of thermal images COMPONENT
- [x] Add the <Gallery /> component on app.js
- [x] GET axios request to display images on DOM
- [x] Append the images 3 per row with timestamps under the pics

### Search Feature COMPONENT
- [ ] Searchable by date/time
- [ ] Add <Search /> to the app.js with props for GET axios request