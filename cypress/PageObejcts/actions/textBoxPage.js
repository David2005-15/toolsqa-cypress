import { CommonAssertions } from "../commonUsefulCommands/assertions";
import { CommonActions } from "../commonUsefulCommands/commands";

export const TextBoxPage = () => {
    return {
        do: () => {
            return CommonActions()
        },

        assert: () => {
            return CommonAssertions
        }
    }
}