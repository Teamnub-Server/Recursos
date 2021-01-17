var estado = "%betterrevive_status%";

function reviveStatus() {
    switch (estado) {
        case "Vivo":
            return "";
            break;
        case "Sangrando":
            return "&c&l[&c⚠&l] ";
            break;
        case "Reanimando":
            return "&6&l[&6⬆&l] ";
            break;
        case "Muerto":
            return "&4&l[&4☠&l] ";
            break;
    }
}
reviveStatus();