const pc_cabinet = {
    name: "Cooler Master Mega",
    hdd: "Seagate 1 TB SATA 7200 RPM",
    ssd: "Samsung EVO Raid 256*2 GB NVMe SSD",
    cpu: "Intel i9 10th Gen",
    gpu: "NVIDIA RTX 3070-Ti",
    ramSize: 32,
    rgbTurnedOn: false,

    toggleRGB: function (value) {
        this.rgbTurnedOn = value
        console.log("RGB Value is updated to ", this.rgbTurnedOn)
    },

    changeRAM: (value) => {
        if (value % 8 === 0) {
            var oldRamVal = this.ramSize;
            this.ramSize = value;
            console.log("RAM changed to", this.ramSize)
        } else console.log("RAM value needs to be multiple of 8.")
    }

}

console.log(pc_cabinet)