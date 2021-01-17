var mundo = "%player_world%";

function detectWorld() {
    switch (mundo) {
        case "world":
            return "&2Overworld ☘";
            break;
        case "DIM-1":
            return "&4Nether ☀";
            break;
        case "DIM1":
            return "&5End ◎"
            break;
    }
}
detectWorld();