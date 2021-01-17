var nombre = "%player_name%";

function nameColor() {
    switch (nombre) {
        case "Nombre1":
            return "&e";
            break;
        case "Nombre2":
            return "&b";
            break;
        case "Nombre3":
            return "&a";
            break;
        // etc
        default:
            return "&f";
            break;
    }
}
nameColor();