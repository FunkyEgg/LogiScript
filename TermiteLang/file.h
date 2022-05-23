#pragma once

#include "common.h"

namespace termite::lang
{
	class File
	{
	private:
		std::string m_FileLocation;
	public:
		File(std::string fileLocation);
		~File();
		std::string ReadFile();
	};
}