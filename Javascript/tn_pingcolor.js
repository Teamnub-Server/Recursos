var ping = parseInt("%player_ping%");
function pingColor() {
    if (ping >= 0 && ping < 100) { return "&a"; } else
    if (ping >= 100 && ping < 150) { return "&2"; } else
    if (ping >= 150 && ping < 200) { return "&e"; } else
    if (ping >= 200 && ping < 250) { return "&c"; } else
    if (ping >= 250) { return "&4"; }
}
pingColor();