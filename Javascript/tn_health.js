var status = "%betterrevive_status%";

function hpFormat() {
    if (status == "Vivo") {
        return ("&c" + Math.round(parseInt('%player_health%') * 100) / 100 + " ♥");
    } else {
        switch (status) {
            case "Sangrando":
                return "&c&lSangrando &c⚠ &8| &cNecesita ayuda!";
                break;
            case "Reanimando":
                return "&6&lReanimando &6⬆";
                break;
            case "Muerto":
                return "&4&lMuerto &4☠";
                break;
        }
    }
}

hpFormat();