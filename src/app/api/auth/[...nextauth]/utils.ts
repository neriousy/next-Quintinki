const SZEF_ID = '1054913065084272743';
const ZASTEPCA_ID = '1089915139500814417';
const ZARZADCA_ID = '1089558597387681823';
const QUINTIN_ID = '1089557811610009740';

export async function getDiscordUserInfo(
  access_token: string
): Promise<{ role: number; nick: string }> {
  try {
    const server_id = process.env.DISCORD_QUINTIN_ID;
    const url = `https://discord.com/api/users/@me/guilds/${server_id}/member`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const json = await response.json();

    const { roles, nick } = json;
    const role = getHighestRole(roles);

    return { role, nick };
  } catch {
    return { role: 5, nick: 'Unknown' };
  }
}

// refactor later into single loop with priority
function getHighestRole(roles: string[]): number {
  if (roles.includes(SZEF_ID)) {
    return 1;
  }
  if (roles.includes(ZASTEPCA_ID)) {
    return 2;
  }
  if (roles.includes(ZARZADCA_ID)) {
    return 3;
  }
  if (roles.includes(QUINTIN_ID)) {
    return 4;
  }
  return 5;
}
