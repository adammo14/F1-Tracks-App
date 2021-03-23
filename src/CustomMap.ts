// Instruction to every other class 
// on how they can be an argument to 'addMarker'
export interface Pin {
    circuitName: string,
    Location: {
        lat: string;
        long: string;
    }
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(id: string) {
        this.googleMap = new google.maps.Map(document.getElementById(id), {
            zoom: 3,
            center: {
                lat: 20,
                lng: 0
            }
        });
    }

    addMarker(pin: Pin): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: parseFloat(pin.Location.lat),
                lng: parseFloat(pin.Location.long)
            }
        });

        marker.addListener('click', () => {
            console.log(pin)
            const infoWindow = new google.maps.InfoWindow({
                content: `<h4 class="m-0">${pin.circuitName}</h4>`
            })

            infoWindow.open(this.googleMap, marker);
        })
    }
}