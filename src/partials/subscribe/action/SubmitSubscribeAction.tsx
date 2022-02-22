class SubmitSubscribeAction {
    public async submit(email: string): Promise<Object> {
        if (!this.validateEmail(email)) {
            throw Error("Wrong email address.");
        }

        try {
            const response = await fetch("https://www.boredapi.com/api/activity");

            return await response.json();
        } catch (error: any) {
            console.log(error.message);

            throw Error("Something went wrong.");
        }
    }

    private validateEmail(string: string): boolean
    {
        let rule = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!rule.test(string)) {
            return false;
        }

        return true;
    }
}

export default SubmitSubscribeAction