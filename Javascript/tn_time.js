var time = "%player_world_time%";
var world = "%player_world%";

function timeFormat() {
  switch (world) {
    case "DIM-1":
      return "&4&kNether";
      break;
    case "DIM1":
      return "&5&kEnd";
      break;
    case "world":
      if (time >= 0 && time < 3000) { return "&e&nMañana&e ☀"; break; } else
      if (time >= 3000 && time < 12000) { return "&3&nTarde&3 ☀☁"; break; } else
      if (time >= 12000 && time < 12786) { return "&9&nAnocheciendo&9 ☄"; break; } else
      if (time >= 12786 && time < 22812) { return "&5&nNoche&5 ☽"; break; } else
      if (time >= 22812 && time < 23600) { return "&6&nAmanecer&6 ☄"; break; } else
      if (time >= 23600 && time < 24000) { return "&e&nManaña&e ☀";  break; }
    default:
      return "&f&kUnknown";
      break;
  }
}

timeFormat();