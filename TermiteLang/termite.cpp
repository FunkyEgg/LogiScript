#include <iostream>
#include <filesystem>

#include "file.h"
#include "common.h"

int main(int argc, char **argv)
{
	using std::filesystem::current_path;
	using namespace termite::lang;

	if (!argv[1])
	{
		std::cout << "No file provided" << std::endl;
		return 1;
	}

	std::string fileLocation = current_path().string() + "/" + argv[1];

	File file = File::File(fileLocation);
	
	std::cout << "File location: " << fileLocation << std::endl;
	std::cout << "File contents:\n[\n" << file.GetFileContents() << "\n]" << std::endl;

	return 0;
}