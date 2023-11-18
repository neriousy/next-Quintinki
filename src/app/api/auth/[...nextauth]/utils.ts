export async function getDiscordUserInfo(access_token: string) {
  try {
    const server_id = process.env.DISCORD_QUINTIN_ID;
    const url = `https://discord.com/api/users/@me/guilds/${server_id}/member`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const json = await response.json();
    console.log(json);
    const { roles, nick } = json;
    const role = getHighestRole(roles);

    return { role, nick };
  } catch {
    return { role: 'guest', nick: 'guest' };
  }
}

function getHighestRole(roles: string[]) {
  if (roles.includes('1054913065084272743')) {
    return 'Szef';
  }
  if (roles.includes('1089915139500814417')) {
    return 'Zastępca';
  }
  if (roles.includes('1089558597387681823')) {
    return 'Zarządca';
  }

  if (roles.includes('1089557811610009740')) {
    return 'Quintin';
  }
  return 'guest';
}
