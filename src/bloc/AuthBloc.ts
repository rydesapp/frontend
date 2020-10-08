import { Bloc } from "@bloc-js/bloc";
import { getUser } from "../graphql/authentincation-api";
import User, { UserRawData } from "../models/User";

export interface AuthState {
  user: User;
  loading: boolean;
}

class AuthBloc extends Bloc<AuthState> {
  constructor(initialState: AuthState) {
    super(initialState);

    this.fetchUserDetails();
  }

  public login(username: string, password: string): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username !== "admin" || password !== "admin") {
          reject(new Error("authentication failed"));
          return;
        }
        const dummyUserDataFromServer: UserRawData = {
          id: 15,
          username: "admin",
          fullName: "admin",
          image: "#",
        };
        const user = new User(dummyUserDataFromServer);
        this.next({
          user,
          loading: false,
        });
        resolve();
      }, 750);
    });
  }

  public setLoading(value: boolean): void {
    //
    this.next({
      ...this.getValue(),
      loading: value,
    });
  }

  private fetchUserDetails() {
    this.setLoading(true);
    getUser().then((user) => {
      this.next({ user, loading: false });
    });
  }
}

export default AuthBloc;
