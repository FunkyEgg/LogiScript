#include <fstream>

#include "file.h"
#include "common.h"

namespace termite::lang
{
	File::File(std::string fileLocation)
	{
		m_FileLocation = fileLocation;
	}

	std::string File::ReadFile()
	{
		std::ifstream ifs(m_FileLocation);
		std::string fileContents((std::istreambuf_iterator<char>(ifs)),
			(std::istreambuf_iterator<char>()));

		return fileContents;
	}

	File::~File() {}
}