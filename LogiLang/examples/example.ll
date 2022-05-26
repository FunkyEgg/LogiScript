comp Nand(in1, in2) {
	return not(and(in1, in2));
}

func nand(in1, in2) {
	out(Nand(in1, in2));
}