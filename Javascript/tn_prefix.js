var mundo = "%player_world%";

function worldPrefix() {
    switch (mundo) {
        case "world":
            return "&2[➜]"
        case "DIM-1":
            return "&4[➜]"
        case "DIM1":
            return "&5[➜]"
    }
}
worldPrefix();