class UsersService {
  private static instanse: UsersService;
  public static getInstance(): UsersService {
    if (!UsersService.instanse) {
      UsersService.instanse = new UsersService();
    }
    return UsersService.instanse;
  }
}
