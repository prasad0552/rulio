{"pattern":{"a":{"b":["?x"]}, "c":["?y"], "d":"?y"},
 "fact": {"a":{"b":["1", "2", "3"]}, "c":["4", "5", "6"], "d":"5"},
 "expected": [{"?x":"1", "?y":"5"},
 				{"?x":"2", "?y":"5"},
 				{"?x":"3", "?y":"5"}],
 "comment":"Deep structure match"}