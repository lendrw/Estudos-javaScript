function recursiva(max) {
    if (max >= 11291) return;
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(0);