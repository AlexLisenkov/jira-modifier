import IssueMutatorController from './modules/issue-mutator/IssueMutatorController';
import CollapseTodo from './modules/collapse-todo/CollapseTodo';
import CollapseDone from './modules/collapse-done/CollapseDone';

(function () {

    console.log("    __  __           ___           ______           __ __           ______           ____            __  ___           ___            _   __\n" +
        "   / / / /          /   |         / ____/          / //_/          / ____/          / __ \\          /  |/  /          /   |          / | / /\n" +
        "  / /_/ /          / /| |        / /              / ,<            / __/            / /_/ /         / /|_/ /          / /| |         /  |/ / \n" +
        " / __  /          / ___ |       / /___           / /| |          / /___           / _, _/         / /  / /          / ___ |        / /|  /  \n" +
        "/_/ /_/          /_/  |_|       \\____/          /_/ |_|         /_____/          /_/ |_|         /_/  /_/          /_/  |_|       /_/ |_/   \n" +
        "                                                                                                                                            ")
    new IssueMutatorController();
    new CollapseTodo();
    new CollapseDone();
}());