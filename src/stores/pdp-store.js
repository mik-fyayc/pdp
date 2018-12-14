import { observable } from 'mobx';

class pdpStore {
    @observable test = "123";
}

export default new pdpStore();