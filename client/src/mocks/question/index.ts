export let mock_question = {
    submit: async function submit(params) {
        await this.go("home");
    }
};
