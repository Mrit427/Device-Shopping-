const products = [
            {
                "name": "Samsung Galaxy S23",
                "price": "$799",
                "image": "https://i.ibb.co.com/CKFMpp7V/Samsung-Galaxy-S23.jpg",
                "description": "Triple rear: 50 MP (wide) + 12 MP (ultra-wide) + 10 MP (telephoto, 3x zoom)."
            },
            {
                "name": "iPhone 15 Pro",
                "price": "$999",
                "image": "https://i.ibb.co.com/2Yyf61XB/i-Phone-15-Pro.jpg",
                "description": "Quad rear: 48 MP (main, wide) + 12 MP 2x telephoto + 12 MP 3x telephoto + 12 MP ultra-wide + LiDAR scanner"
            },
            {
                "name": "MacBook Air M2",
                "price": "$1199",
                "image": "https://i.ibb.co.com/1tNzcnmq/mac.jpg",
                "description": "1080p FaceTime HD camera."
            },
            {
                "name": "Sony WH-1000XM5 Headphones",
                "price": "$349",
                "image": "https://i.ibb.co.com/fG2sq5Tz/Sony-WH-1000-XM5-Headphones.jpg",
                "description": "Premium noise-cancelling wireless headphones.Sony WH-1000XM5 Wireless Noise Cancelling Headphones"
            },
            {
                "name": "Amazon Smart Thermostat",
                "price": " $75",
                "image": "https://i.ibb.co.com/yLDtkfp/Amazon-Smart-Thermostat.jpg",
                "description": "Although Amazon Smart Thermostat is compatible with most homes, we recommend checking compatibility before purchasing."
            },
            {
                "name": "Roborock Saros Z70",
                "price": "$2000",
                "image": "https://i.ibb.co.com/WvpysTmT/Roborock-Saros-Z70.jpg",
                "description": "oborock Saros Z70 Robot Vacuum and Mop, OmniGrip Arm, AI-Powered, 22,000Pa Suction, 3.14’’ Ultra Slim, FlexiArm Riser Technology, AdaptiLift Chassis, Obstacle Avoidance, Auto Mop Washing & Drying"
            },
            {
                "name": "EufyCam 3",
                "price": "$370",
                "image": "https://i.ibb.co.com/jk4Z17R1/Eufy-Cam-3.jpg",
                "description": "eufy Security eufyCam S330 (eufyCam 3) 2-Cam Kit, Security Camera Outdoor Wireless, 4K Camera with Solar Panel, Forever Power, Face Recognition AI, Expandable Local Storage, No Monthly Fee"
            },
            {
                "name": "Homey Smart Hub",
                "price": "$1000",
                "image": "https://i.ibb.co.com/DDxSS273/Homey-Smart-Hub.jpg",
                "description": "Homey Pro | Smart Home Hub for Home Automation – Features Z-Wave Plus, Zigbee, Wi-Fi, BLE, Infrared, Matter & Thread. Compatible with Siri, Alexa & Google Home."
            },
            {
                "name": "Aqara U100 Smart Lock",
                "price": "$200",
                "image": "https://i.ibb.co.com/LzBX8g8h/Aqara-U100-Smart-Lock.jpg",
                "description": "Aqara Smart Lock U100, Fingerprint Keyless Entry Door Lock with Apple Home Key, Touchscreen Keypad, Bluetooth Electronic Deadbolt, IP65 Weatherproof, Supports Apple HomeKit, Alexa, Google, IFTTT, Gray"
            }
        ];

        const container = document.getElementById("product-container");
        container.innerHTML = products.map(product => `
            <div class='card'>
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class='price'>${product.price}</div>
            </div>
        `).join("");

//<a href="https://imgbb.com/"><img src="https://i.ibb.co.com/LzBX8g8h/Aqara-U100-Smart-Lock.jpg" alt="Aqara-U100-Smart-Lock" border="0"></a>