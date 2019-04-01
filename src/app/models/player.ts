export class player{
    Accept: boolean;

    constructor(
        public PlayerName: string,
        public RoleId: number
    ) {}

    acceptTeam() {
        this.Accept = true;
    }

    rejectTeam() {
        this.Accept = false;
    }
}