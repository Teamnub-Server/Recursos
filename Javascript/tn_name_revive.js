var nombre = "%player_name%";
var color = "%javascript_tn_color%";
var revive = "%betterrevive_status%";

function nameRevive() {
    switch (revive) {
        case "Sangrando":
            return "&c&l" + nombre;
            break;
        case "Reanimando":
            return "&6&l" + nombre;
            break;
        case "Muerto":
            return "&4&l" + nombre;
            break;
        default:
            return color + "&l" + nombre;
            break;
    }
}
nameRevive();